"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "../Loading/Loading";
import { Category } from "../../types/recipe";
import styles from "./CategoryList.module.css";

// カテゴリリストコンポーネント
const CategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
    const [categoriesError, setCategoriesError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/categories"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setCategoriesError(
                    error instanceof Error
                        ? error
                        : new Error("An error occurred")
                );
            } finally {
                setCategoriesLoading(false);
            }
        }

        fetchData();
    }, []);

    if (categoriesLoading) return <Loading />;
    if (categoriesError) return <div>Error: {categoriesError.message}</div>;

    const getCategoryStyle = (title: string) => {
        switch (title) {
            case "あっさり":
                return {
                    img: "/images/category/assari.png",
                    className: styles.assari,
                };
            case "さっぱり":
                return {
                    img: "/images/category/sappari.png",
                    className: styles.sappari,
                };
            case "ガッツリ":
                return {
                    img: "/images/category/gatturi.png",
                    className: styles.gatturi,
                };
            case "ぱぱっと":
                return {
                    img: "/images/category/papatto.png",
                    className: styles.papatto,
                };
            default:
                return {
                    img: "/images/category/default.png",
                    className: styles.default,
                };
        }
    };

    return (
        <div id="category">
            <div className={styles.category_title}>#Category</div>
            <div className={styles.category_content}>
                {categories.map((category) => {
                    const { img: categoryImage, className: categoryClassName } =
                        getCategoryStyle(category.name);
                    return (
                        <div className={categoryClassName} key={category.id}>
                            <Link href={`/category/${category.id}`}>
                                <div className={styles.category_box}>
                                    <Image
                                        src={categoryImage}
                                        alt={category.name}
                                        width={140}
                                        height={150}
                                        className={styles.category_image}
                                        priority={true}
                                    />
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryList;
