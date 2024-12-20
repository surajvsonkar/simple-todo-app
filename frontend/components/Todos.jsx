import { useState } from 'react';

export function Todos({ todos }) {
	const [id, setId] = useState('');

	return (
		<div>
			{todos.map((todo) => (
				<div key={todo._id}>
					<h1>{todo.title}</h1>
					<h2>{todo.description}</h2>
					<button
						onClick={() => {
							// Set the id of the specific TODO
							setId(todo._id);

							// Make the PUT request to mark as completed
							fetch('http://localhost:4000/completed', {
								method: 'PUT',
								body: JSON.stringify({
									id: todo._id, // Use the specific id directly
								}),
								headers: {
									'Content-Type': 'application/json',
								},
							})
								.then(async (res) => {
									const json = await res.json();
									alert(json.msg || 'TODO marked as completed');
								})
						}}>
						{todo.completed ? 'Completed' : 'Mark as Complete!'}
					</button>
				</div>
			))}
		</div>
	);
}
