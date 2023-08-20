import {ID, storage} from "@/appwrite"
export const UploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        process.env.NEXT_PUBLIC_TODOS_STORADE_ID!,
        ID.unique(),
        file
    )

    return fileUploaded
}