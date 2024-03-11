"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Recipe, Category } from "../../types/recipe";
import Link from "next/link";
import Loading from "@/app/_components/Loading/Loading";
import Image from "next/image";
import styles from "./Category.module.css";

const CategoryList = () => {
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const { id } = useParams();

    useEffect(() => {
        async function fetchCategoryAndRecipes() {
            try {
                if (!id) return;
                const response = await fetch(
                    `http://localhost:3000/api/categories/${id}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategory(data); // カテゴリーとレシピの情報をステートに保存
            } catch (error) {
                setError(
                    error instanceof Error
                        ? error
                        : new Error("An error occurred")
                );
            } finally {
                setLoading(false);
            }
        }

        fetchCategoryAndRecipes();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!category) {
        return <div>No category found</div>;
    }

    return (
        <div>
            <div>
                <h2 className={styles.category_title}>{category.name}</h2>
            </div>
            <div className="new-content grid">
                {category.recipes.map((recipe) => (
                    <div key={recipe.id} className="item">
                        <Link href={`/recipe/${recipe.id}`}>
                            {recipe.thumbnail_url && (
                                <Image
                                    src={recipe.thumbnail_url}
                                    alt={recipe.title}
                                    width={300}
                                    height={200}
                                    priority={true}
                                    style={{ objectFit: "cover" }}
                                />
                            )}
                            <p>{recipe.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
