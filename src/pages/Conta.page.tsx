import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo/CardInfo.component";
import { useState, useEffect, useContext } from "react";
import { IUserDate, api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Conta = () => {
    const [userData, setUserData] = useState<null | IUserDate>(null)

    const context = useContext(AppContext)
    console.log('pagina conta ', context);
    
    useEffect(() => {
        const getData = async () => {
            const data: IUserDate = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    const { id } = useParams()
    const navigate = useNavigate()
    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    !userData ?
                        (
                            <Center>
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            </Center>
                        )
                        :
                        (
                            <>
                                <CardInfo
                                    mainContent={`Bem Vindo ${userData?.name}`}
                                    content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
                                />
                                <CardInfo
                                    mainContent="Saldo"
                                    content={`R$ ${userData?.balance}`}
                                />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta;