"use server";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState: any, forData: FormData) {
    const rawFormData = {
      lastname: forData.get("lastname") as string,
      firstname: forData.get("firstname") as string,
      company: forData.get("company") as string,
      email: forData.get("email") as string,
      message: forData.get("message") as string,
    };

    if (!rawFormData.lastname){
        return {
            status: "error",
            message: "姓を入力してください",
        };
    }
    if (!rawFormData.firstname){
        return {
            status: "error",
            message: "名を入力してください",
        };
    }
    if (!rawFormData.company){
        return {
            status: "error",
            message: "会社名を入力してください",
        };
    }
    if (!rawFormData.email){
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }
    if (!validateEmail(rawFormData.email)){
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        };
    }
    if (!rawFormData.message){
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }

    return { status: "success" ,message: "OK" };
}