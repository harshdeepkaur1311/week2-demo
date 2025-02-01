"use client";

import { addBlogPost } from "../_services/blog-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {title, content} = e.target.elements;

        await addBlogPost({
            title: title.value,
            content: content.value,
        });

        title.value = "";
        content.value = "";
    };

    if (!user) {
        return null;
    }

    return (
        <main>
            <h1>New post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" className="text-black"/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" className="text-black"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}