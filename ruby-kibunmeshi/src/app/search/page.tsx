"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SearchRecipe from "../_components/SearchRecipe/SearchRecipe";
import Loading from "../_components/Loading/Loading";
import { Recipe } from "../types/recipe";

const Search: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("word");
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                setLoading(true);
                const url = new URL(
                    "http://localhost:3000/api/recipes/search",
                    window.location.origin
                );
                if (query) {
                    url.searchParams.append("query", query);
                }
                const response = await fetch(url.toString());
                const data = await response.json();

                console.log(data);

                if (response.ok) {
                    setSearchResults(data);
                } else {
                    throw new Error(
                        data.message || "検索中にエラーが発生しました"
                    );
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            handleSearch();
        }
    }, [query]);

    if (loading) {
        return <Loading />; // ローディングコンポーネントを表示
    }

    return (
        <>
            <SearchRecipe />
            <div className="search-results new-content grid">
                {searchResults.map((recipe) => (
                    <div key={recipe.id} className="item">
                        <Link href={`/recipe/${recipe.id}`}>
                            <Image
                                src={recipe.thumbnail_url}
                                alt={recipe.title}
                                width={300}
                                height={200}
                                layout="responsive"
                            />
                            <p>{recipe.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Search;
