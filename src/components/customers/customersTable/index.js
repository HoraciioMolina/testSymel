import React, { useEffect, useState } from "react";
import { changeCustomerState, db } from "../../../firebase/client";
import Table from "../../UI/table";
import { ref, onValue } from "firebase/database";
import { Checkbox } from "@material-ui/core";

const CustomersTable = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const queryRef = ref(db, "customers");

    onValue(
      queryRef,
      (snapshot) => {
        const customers = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          customers.push({ ...childData, id: childKey });
        });
        setState(customers);
      },
      (error) => {}
    );
  }, []);

  const columns = [
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Apellido",
      field: "lastName",
    },
    {
      title: "Celular",
      field: "phone",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Plan",
      field: "plan",
    },
    {
      title: "Mail enviado",
      field: "id",
      // eslint-disable-next-line react/display-name
      render: (rowData) => (
        <Checkbox
          checked={rowData.emailSend}
          onClick={() =>
            onChangeCustomerStateClick({
              ...rowData,
              emailSend: !rowData.emailSend,
            })
          }
        />
      ),
    },
  ];

  const onChangeCustomerStateClick = (data) => {
    debugger;
    delete data?.tableData;
    changeCustomerState(data);
  };

  return (
    <>
      <Table title="Personas" columns={columns} data={state} loading={false} />
    </>
  );
};

export default CustomersTable;
