import { IListRequest } from "@/models/board.model";
import { IResponse } from "@/models/http.model";
import http from "./http.service";

class ListService {
    private _listUrl = "/api/v1/Board";

    public create(data: IListRequest): Promise<IResponse> {
        return http.post(this._listUrl, data);
    }
}

export default new ListService();