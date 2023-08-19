interface Board {
    columns: Map<TypedColumnm, Column>
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: string;
}

interface Image {
    bucketId: string;
    fileId: string;
}
