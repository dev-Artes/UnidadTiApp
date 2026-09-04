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
          className="bg-amber-100 text-amber-700 ring-amber-200 px-3 py-1.5 rounded-full text-xs font-semibold border ring-1 transition-all hover:bg-amber-200"
          onClick={onEdit}
        >
          Editar
        </button>
      )}
      
      {onDetail && (
        <button
          className="bg-sky-100 text-sky-700 ring-sky-200 px-3 py-1.5 rounded-full text-xs font-semibold border ring-1 transition-all hover:bg-sky-200"
          onClick={onDetail}
        >
          Detalle
        </button>
      )}

      {onDelete && (
        <button
          className="bg-rose-100 text-rose-700 ring-rose-200 px-3 py-1.5 rounded-full text-xs font-semibold border ring-1 transition-all hover:bg-rose-200"
          onClick={onDelete}
        >
          Eliminar
        </button>
      )}

      {onActive && (
        <button
          onClick={onActive}
          className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200
            ${isActive ? 'bg-emerald-500' : 'bg-gray-300'}`}
        >
          <span
            className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200
              ${isActive ? 'translate-x-6' : 'translate-x-1'}`}
          />
        </button>
      )}

      {onPDF && (
        <button
          className="bg-emerald-100 text-emerald-700 ring-emerald-200 px-3 py-1.5 rounded-full text-xs font-semibold border ring-1 transition-all hover:bg-emerald-200"
          onClick={onPDF}
        >
          PDF
        </button>
      )}

    </div>
  )
}

export default TableActions
