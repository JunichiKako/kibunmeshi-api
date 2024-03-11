"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowConfirmModal(true);
    };

    const handleConfirmSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contact: {
                        name,
                        email,
                        message,
                    },
                }),
            });

            if (response.ok) {
                alert("お問い合わせが正常に送信されました。");
                clearForm();
            } else {
                const errorData = await response.json();
                alert(
                    `送信に失敗しました。${
                        errorData.message || "再度お試しください。"
                    }`
                );
            }
        } catch (error) {
            console.error(error);
            alert("エラーが発生しました。再度お試しください。");
        } finally {
            setShowConfirmModal(false);
        }
    };

    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <div className={styles.contact_title}>#Contact</div>
            <div className={styles.contact_container}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className={styles.label}>
                        名前<span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                        className={styles.input}
                    />

                    <label htmlFor="email" className={styles.label}>
                        メールアドレス<span className={styles.required}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        className={styles.input}
                    />

                    <label htmlFor="message" className={styles.label}>
                        お問い合わせ内容
                        <span className={styles.required}>*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setMessage(e.target.value)
                        }
                        className={styles.textarea}
                    />
                    <button type="submit" className={styles.submit_btn}>
                        送信
                    </button>
                </form>
                {showConfirmModal && (
                    <div className={styles.modal_overlay}>
                        <div className={styles.confirm_modal}>
                            <h2>内容確認</h2>
                            <p>名前: {name}</p>
                            <p>メールアドレス: {email}</p>
                            <p>メッセージ: {message}</p>
                            <button
                                onClick={handleConfirmSubmit}
                                className={styles.confirm_btn}
                            >
                                確認して送信
                            </button>
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className={styles.cancel_btn}
                            >
                                キャンセル
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
