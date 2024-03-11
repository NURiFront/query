import { useState } from "react";
import {
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useGetTodosQuery,
	useDeleteAllMutation,
	useEditTodoMutation,
} from "../redux/api/crud";

const TodoList = () => {
	const [editId, setEditId] = useState<number | null>(null);
	const [editFirstName, setEditFirstName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [editLastName, seteditLastName] = useState("");
	const [lastName, setLastName] = useState("");
	const { data, isLoading } = useGetTodosQuery();
	const [createTodo] = useCreateTodoMutation();
	const [editTodo] = useEditTodoMutation();

	const [deleteTodo] = useDeleteTodoMutation();
	const [deleteAll] = useDeleteAllMutation();
	console.log(data);

	const addTodo = async () => {
		await createTodo({ firstName, lastName });
	};
	const handleEditTodo = async (_id: number) => {
		const updateData = {
			firstName: editFirstName,
			lastName: editLastName,
		};
		await editTodo({ _id, updateData });
		setEditId(null);
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
							{editId === item._id ? (
								<>
									<input
										type="text"
										value={editFirstName}
										onChange={(e) => setEditFirstName(e.target.value)}
									/>
									<input
										type="text"
										value={editLastName}
										onChange={(e) => seteditLastName(e.target.value)}
									/>
									<button onClick={() => handleEditTodo(item._id!)}>
										save
									</button>
								</>
							) : (
								<>
									<h1>{item.firstName}</h1>
									<h1>{item.lastName}</h1>
									<button
										onClick={() => {
											setEditId(item._id!);
											setEditFirstName(item.firstName);
											seteditLastName(item.lastName);
										}}>
										edit
									</button>
									<button onClick={() => handeleDeleteTodo(item._id!)}>
										delete
									</button>
								</>
							)}
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default TodoList;
