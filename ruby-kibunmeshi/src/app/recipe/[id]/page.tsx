"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loading from "../../_components/Loading/Loading";
import { Recipe } from "../../types/recipe";
import styles from "./Recipe_detail.module.css";

export default function RecipeDetail() {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const { id } = useParams();

    useEffect(() => {
        async function fetchRecipe() {
            try {
                if (!id) return;
                const response = await fetch(
                    `http://localhost:3000/api/recipes/${id}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRecipe(data);
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

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;
    if (!recipe) return <div>Recipe not found</div>;

    // カテゴリタイトルに基づく背景色のマッピング
    const categoryStyles: {
        [key: string]: { backgroundColor: string; color: string };
    } = {
        あっさり: { backgroundColor: "#a7d1d1", color: "#fff" },
        さっぱり: { backgroundColor: "#ffb700", color: "#fff" },
        ガッツリ: { backgroundColor: "#e14b00", color: "#fff" },
        ぱぱっと: { backgroundColor: "#201e64", color: "#fff" },
    };

    return (
        <div>
            <header className={styles.recipe_header}>
                <h2 className={styles.recipe_title}>{recipe.title}</h2>
                <div
                    className={styles.category_title}
                    style={categoryStyles[recipe.category.name] || {}}
                >
                    {recipe.category.name}
                </div>
            </header>

            {recipe.thumbnail_url && (
                <div className={styles.thumbnail}>
                    <Image
                        src={recipe.thumbnail_url}
                        alt={`${recipe.title}の画像`}
                        className={styles.thumbnail_img}
                        width={700}
                        height={390}
                    />
                </div>
            )}

            <section className={styles.recipe_material}>
                <h3 className={styles.material_title}>材料・分量</h3>
                <ul>
                    {recipe.materials.map((material, index) => (
                        <li key={index} className={styles.material_item}>
                            <span>{material.name}</span>
                            <span>{material.quantity}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.recipe_step}>
                <h3 className={styles.step_title}>作り方</h3>
                <ol>
                    {recipe.how_tos.map((step, index) => (
                        <li key={index} className={styles.step_list}>
                            <span className={styles.step_content_mark}>
                                {index + 1}
                            </span>
                            <p>{step.text}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
