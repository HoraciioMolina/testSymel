import React from "react";
import MaterialTable from "material-table";

const Table = (props) => {
  const {
    title,
    columns,
    data,
    loading,
    components,
    customOptions,
    actionsTitle,
    editable,
    tableRef,
    detailPanel,
    onRowClick,
    style,
    customBoxShadow,
    actionAdd,
    actionUpdate,
    actionDelete,
  } = props;

  return (
    <MaterialTable
      style={{
        ...style,
        boxShadow: customBoxShadow ? customBoxShadow : "none",
        width: "100%",
      }}
      tableRef={tableRef}
      title={title}
      columns={columns}
      editable={editable}
      data={data}
      isLoading={loading}
      actions={[
        actionAdd && {
          icon: "add",
          tooltip: "Crear",
          isFreeAction: true,
          onClick: (e) => actionAdd(e),
        },
        actionUpdate && {
          icon: "edit",
          tooltip: "Editar",
          onClick: (e, rowData) => actionUpdate(e, rowData),
        },
        actionDelete && {
          icon: "delete",
          tooltip: "Eliminar",
          onClick: (e, rowData) => actionDelete(e, rowData),
        },
      ]}
      components={components}
      detailPanel={detailPanel}
      onRowClick={
        props.onRowClick
          ? (event, rowData) => onRowClick(event, rowData)
          : undefined
      }
      onColumnDragged={
        props.onColumnDragged
          ? (sourceIndex, destinationIndex) =>
              props.onColumnDragged(sourceIndex, destinationIndex)
          : undefined
      }
      localization={{
        header: {
          actions: actionsTitle,
        },
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count}",
          labelRowsSelect: "Filas",
          previousTooltip: "Página anterior",
          nextTooltip: "Página siguiente",
          firstTooltip: "Primer página",
          lastTooltip: "Última página",
        },
        toolbar: {
          searchTooltip: "Buscar",
          searchPlaceholder: "Buscar",
          exportName: "Descargar en CSV",
          exportAriaLabel: "Exportar",
          exportTitle: "Exportar",
          addRemoveColumns: "add col",
        },
        body: {
          editTooltip: "Editar",
          addTooltip: "Nuevo",
          emptyDataSourceMessage: loading
            ? "Cargando..."
            : "No hay datos para mostrar",
        },
      }}
      options={{
        ...customOptions,
      }}
    />
  );
};

export default Table;
