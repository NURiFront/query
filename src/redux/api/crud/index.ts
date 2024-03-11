import { api as index } from "..";
import { CRUD } from "./types";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getTodos: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["crud"],
		}),

		createTodo: builder.mutation<
			CRUD.CreateCrudResponse,
			CRUD.CreateCrudRequest
		>({
			query: ({ firstName, lastName }) => ({
				url: "",
				method: "POST",
				body: { firstName, lastName },
			}),
			invalidatesTags: ["crud"],
		}),
		deleteTodo: builder.mutation<
			CRUD.DeleteCrudResponse,
			CRUD.DeleteCrudRequest
		>({
			query: (_id) => ({
				url: `${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["crud"],
		}),
		deleteAll: builder.mutation<
			CRUD.DeleteAllCrudResponse,
			CRUD.DeleteAllCrudRequest
		>({
			query: () => ({
				url: '',
				method: "DELETE",
			}),
			invalidatesTags: ["crud"],
		}),
	}),
});
export const {
	useGetTodosQuery,
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useDeleteAllMutation,
} = api;
