class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = includes;
    }

    getAll() {
        return this.Model.findAll();
    }

    getById(id) {
        return this.Model.findById(id, {
            include: this.includes,
        });
    }

    create(obj) {
        this.Model.create(obj);
    }

    filterConstructor(filterObj) {
        return this.Model.findAll({
            where: filterObj,
        });
    }

    filterByCity(id) {
        const products = this.filterConstructor({
            fk_city_id: id,
        });

        return products;
    }

    filterByCategory(id) {
        const products = this.filterConstructor({
            fk_category_id: id,
        });

        return products;
    }

    filterByUser(id) {
        const products = this.filterConstructor({
            fk_user_id: id,
        });

        return products;
    }

    orderBy(column, parameter) {
        const orderedProducts = this.Model.findAll({
            order: [
                [column, parameter],
            ],
        });

        return orderedProducts;
    }

    searchBy(catecogy, parameter) {
        const products = this.Model.findAll({
            where: {
                catecogy: parameter,
            },
        });

        return products;
    }

    findByUsername(username) {
        return this.Model.findOne({
            where: {
                username,
            },
        });
    }
}

module.exports = Data;
