// import { boardsApi } from "@/shared/api/modules/board";
// import { useQueryClient } from "@tanstack/react-query";
//
// // Если я захочу переиспользовать запросы в других местах, то можно вынести в отдельный файл
// // По дефолту будем писать в model/use-....ts рядом с фичой.
// const boardQueryKey = "board";
//
// export const boardsListQuery = () => ({
//     queryKey: [boardQueryKey, "list"],
//     queryFn: () => {
//         return boardsApi.getBoards();
//     },
// });
//
// export const boardByIdQuery = (id: string) => ({
//     queryKey: [boardQueryKey, "byId", id],
//     queryFn: () => boardsApi.getBoard(id).then((r) => r ?? null),
// });
//
// export const useInvaliateBoardsList = () => {
//     const queryClient = useQueryClient();
//
//     return () =>
//         queryClient.invalidateQueries({
//             queryKey: [boardQueryKey, "list"],
//         });
// };
//
// //
// const { data: boards } = useQuery({
//     ...boardsListQuery(),
//     select: (data) => data.filter(filterOptions),
//     initialData: [],
// });
//
// // models
// export function useBoardsList() {
//     const { data: usersMap = {} } = useQuery({
//         ...usersListQuery(),
//         select: listToRecord,
//     });
//
//     const { data: boards } = useQuery({
//         ...boardsListQuery(),
//         initialData: [],
//     });
//
//     return boards.map((board) => ({
//         ...board,
//         owner: usersMap[board.ownerId],
//         editors: board.editorsIds.map((id) => usersMap[id]),
//     }));
// }
//
// // Signal
// getTodoListQueryOptions: ({ userId }: { userId: string }) => {
//     return queryOptions({
//         queryKey: [todoListApi.baseKey, "list", userId],
//         queryFn: meta =>
//             jsonApiInstance<TodoDto[]>(`/tasks?userId=${userId}`, {
//                 signal: meta.signal
//             })
//     });
// },