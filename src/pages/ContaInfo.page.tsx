import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const ContaInfo = () => {
    return(
        <>
        <Text fontSize="3xl" fontWeight="bold">
            Informações da conta
        </Text>
            <Link to="/conta/1">
                <Text>
                    Conta
                </Text>
            </Link>
        </>
    )
}

export default ContaInfo;