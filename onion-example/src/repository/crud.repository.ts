interface CrudRepository<T, K> {
    getAll(): Promise<T[]>
    findById(id: K): Promise<T>

    save(entity: T): Promise<T>
    delete(id: K): Promise<boolean>
}