class ApiFeature {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        // console.log(this.queryStr)
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}

        this.query = this.query.find(keyword)

        return this

        // console.log(keyword);
    }

    pagination(resultNumberPage) {

        let currentPage = Number(this.queryStr.page) || 1

        let skip = resultNumberPage * (currentPage - 1)

        this.query = this.query.limit(resultNumberPage).skip(skip)

        return this
    }


    filter() {
        console.log(this.queryStr)
        let category = this.queryStr.category ? this.queryStr.category : ''

        if(category){
            const products = this.query.find({ category: category })
        }

        return this

    }
}

module.exports = ApiFeature