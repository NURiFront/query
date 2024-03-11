import { useState } from "react";
import {
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useGetTodosQuery,
	useDeleteAllMutation,
} from "../redux/api/crud";

const TodoList = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const { data, isLoading } = useGetTodosQuery();
	const [createTodo] = useCreateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();
	const [deleteAll] = useDeleteAllMutation();
	console.log(data);

	const addTodo = async () => {
		await createTodo({ firstName, lastName });
	};

	const handeleDeleteTodo = async (_id: number) => {
		console.log(_id);

		await deleteTodo(_id);
	};
	const handleDeleteAll = async () => {
		await deleteAll();
	};
	return (
		<div>
			<input
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<input
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<button onClick={addTodo}>add</button>
			<button onClick={() => handleDeleteAll()}>delete all</button>
			{isLoading ? (
				<>
					<h1>Loading...</h1>
				</>
			) : (
				<>
					{data?.map((item) => (
						<div key={item._id}>
							<h1>{item.firstName}</h1>
							<button onClick={() => handeleDeleteTodo(item._id!)}>
								delete
							</button>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default TodoList;
