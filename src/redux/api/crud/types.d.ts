/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
	type CreateCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	type CreateCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
	type EditCrudRequest = {
		_id?: number;
		updateData: {
			firstName: string;
			lastName: string;
		};
	};
	type EditCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
	type DeleteCrudRequest = number;
	type DeleteCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
	type DeleteAllCrudRequest = void;
	type DeleteAllCrudResponse = [];
}
