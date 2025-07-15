import { Redirect } from "expo-router";

const Index = () => {
    // Hack - this file is required to load by default so redirect
    return <Redirect href="/home" />;;
};
export default Index;

