import React, { useState } from "react";

const TimeTrackerForm = () => {
    const [form, setForm] = useState({
        student: "",
        worksheet: "",
        time_start: "",
        time_end: "",
        date: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const webhookURL = "xxxxxx"

        try {
            await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            alert("Submitted successfully!");
            setForm({
                student: "",
                worksheet: "",
                time_start: "",
                time_end: "",
                date: "",
            });
        } catch (error) {
            console.error("Submission failed:", error);
            alert("There was an error. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h2>Worksheet Time Tracker</h2>

            <input
                type="text"
                name="student"
                placeholder="Student Name"
                value={form.student}
                onChange={handleChange}
                required
                style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px"}}
            />

            <input
                type="text"
                name="worksheet"
                placeholder="Worksheet ID (e.g., M-C-007)"
                value={form.worksheet}
                onChange={handleChange}
                required
                style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px"}}
            />

            <input
                type="time"
                name="time_start"
                value={form.time_start}
                onChange={handleChange}
                required
                style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px"}}
            />

            <input
                type="time"
                name="time_end"
                value={form.time_end}
                onChange={handleChange}
                required
                style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px"}}
            />


        </form>
    )
    
}