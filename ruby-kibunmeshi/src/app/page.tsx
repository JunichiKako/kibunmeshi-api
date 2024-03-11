"use client";
// Components
import React from "react";
import CategoryList from "./_components/CategoryList/CategoryList";
import SearchRecipe from "./_components/SearchRecipe/SearchRecipe";
import Loading from "./_components/Loading/Loading";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { Recipe } from "./types/recipe";
import Link from "next/link";

// レシピデータをフェッチする関数
async function fetchRecipes() {
    const res = await fetch("http://localhost:3000/api/recipes");
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
}

// レシピページコンポーネント
export default function RecipesPage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchRecipes().then(setRecipes).catch(setError);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <SearchRecipe />
            <div className="new-content grid">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="item">
                        <Link href={`/recipe/${recipe.id}`}>
                            <Image
                                src={recipe.thumbnail_url}
                                alt={recipe.title}
                                width={300}
                                height={200}
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                                rel="preload"
                            />
                            <p>{recipe.title}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className={styles.recipe_all}>
                <Link href="/recipes">
                    <div className={styles.recipe_all_btn}>
                        レシピ一覧はこちらから
                    </div>
                </Link>
            </div>

            <CategoryList />
        </>
    );
}
