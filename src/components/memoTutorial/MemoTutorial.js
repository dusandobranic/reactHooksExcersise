import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
    const [comments, setComments] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setComments(res.data)
            })
    }, []);

    const findLongestComment = (comments) => {
        if (!comments) return null;

        let longestComment = "";

        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;

            if (currentName.length > longestComment.length) {
                longestComment = currentName
            }
        }

        console.log('This was computed');

        return longestComment;
    }


    const getLongestComment = useMemo(() =>
        findLongestComment(comments),
        [comments]
    );

    return (
        <>
            <div>
                {/* {findLongestComment(comments)} */}
                {getLongestComment}
            </div>
            <div>
                <button onClick={() => setToggle(!toggle)}>
                    Toggle
                </button>
                {toggle && <h1> toggle </h1>}
                <button onClick={() => setComments([])}>set data</button>
            </div>
        </>
    )
}

