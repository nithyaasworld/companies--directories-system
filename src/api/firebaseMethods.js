// Write firebase related methods here.
import { databaseRef } from "../firebaseConfig";

export const addCompanyToDB = async (payload) => {
    return await databaseRef.collection("companies").add(payload);
}
export const getAllCompaniesFromDB = async () => {
    return await databaseRef.collection("companies").get();
}
export const addNewPersonToDB = async (payload) => {
    return await databaseRef.collection("companies").doc(payload.id).collection('employees').add({"name": payload.name, "address": payload.address});
}
export const getAllEmployeesFromDB = async(companyID) => {
    return await databaseRef.collection("companies").doc(companyID).collection('employees').get();
}