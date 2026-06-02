import { useEffect, useState } from "react"

import type { Brand } from "../../../types/entidades"

import { deleteBrand, getBrands } from "../../../services"

export const useBrand = () => {
    const [ brands, setBrands ] = useState<Brand[]>([])
    const [ error, setError ] = useState<string | null>(null)
    const [ loading, setLoading ] = useState(true)
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const data = await getBrands()
                const dataSorted = data.sort((a, b) => a.name.localeCompare(b.name))
                setBrands(dataSorted)

            } catch ( error ) {
                setError( 'Error loading brands' )
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    const deleteBrandById = async ( id: string ) => {
        await deleteBrand(id)
        setBrands( prev => prev.filter(b => b.id !== id) )
    }

    return {
        brands, error, loading, deleteBrandById
    }
}