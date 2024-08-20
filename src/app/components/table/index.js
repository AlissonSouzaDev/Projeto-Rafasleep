import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

function SimpleTable() {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Dados de usuários cadastrados</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th isNumeric>Idade</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>João Silva</Td>
            <Td>joao@example.com</Td>
            <Td isNumeric>28</Td>
          </Tr>
          <Tr>
            <Td>Maria Oliveira</Td>
            <Td>maria@example.com</Td>
            <Td isNumeric>24</Td>
          </Tr>
          <Tr>
            <Td>Pedro Santos</Td>
            <Td>pedro@example.com</Td>
            <Td isNumeric>30</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th isNumeric>Idade</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;
