import Button from "../Button"

interface TableActionsProps {
  onDelete?: () => void
  onEdit?: () => void
  onDetail?: () => void
  onActive?: () => void
  onPDF?: () => void
  isActive?: boolean
}

const TableActions = ({
  onDelete,
  onDetail,
  onEdit,
  onActive,
  onPDF,
  isActive
}: TableActionsProps) => {
  return (
    <div className="flex justify-center gap-2">

      {onEdit && (
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          onClick={onEdit}
        >
          Editar
        </button>
      )}
      
      {onDetail && (
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
          onClick={onDetail}
        >
          Detalle
        </button>
      )}

      {onDelete && (
        <button
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          onClick={onDelete}
        >
          Eliminar
        </button>
      )}

      {onActive && (
        <button
          onClick={onActive}
          className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200
            ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          <span
            className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200
              ${isActive ? 'translate-x-6' : 'translate-x-1'}`}
          />
        </button>
      )}

      {onPDF && (
        <Button variant="green" onClick={onPDF} >
          {'PDF'}
        </Button>
      )}

    </div>
  )
}

export default TableActions