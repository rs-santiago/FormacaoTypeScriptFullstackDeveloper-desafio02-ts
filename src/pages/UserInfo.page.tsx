import { Center, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo/CardInfo.component";
import { getAllLocalStorage } from "../services/storage/storage";

const UserInfo = () => {
    const storage = getAllLocalStorage()
    const storageJson = storage ? JSON.parse(storage) : null
    return (
        <Center>
            <SimpleGrid columns={1} spacing={8} paddingTop={16}>
                <CardInfo
                    mainContent={`Nome: ${storageJson?.userDate?.name}`}
                    content={`Email: ${storageJson?.userDate?.email}`}
                />
            </SimpleGrid>
        </Center>
    )
}

export default UserInfo