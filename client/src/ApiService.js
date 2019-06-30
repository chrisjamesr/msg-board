class ApiService {
    constructor(){
        this.apiURL = 'http://localhost:3001/api';
        this.messageFields = `{id, content, email, created_at}`
    }

    async getGraphqlData(resource, params, fields){
        const query = `{${resource} ${this.paramsToString(params)} ${fields}}`;
        console.log(query);
        const res = await fetch(this.apiURL, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });
        if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.status);
        }
    }

    async getMessages(params = {}) {
        const data = await this.getGraphqlData(
            'messages', params, this.messageFields
        );
        //return users list
        return data.messages;
    }

    async postMessage(params){
        const query = `mutation {addMessage${this.paramsToString(params)} ${this.messageFields} }`
        const res = await fetch(this.apiURL, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });
         if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.status);
        }
    }

    paramsToString(params) {
        let paramString = '';
        if (params.constructor === Object && Object.keys(params).length) {
            let tmp = [];
            for (let key in params) {
                let paramStr = params[key];
                if(paramStr !== '') {
                    if (typeof params[key] === 'string') {
                        paramStr = `"${paramStr}"`;
                    }
                    tmp.push(`${key}:${paramStr}`);
                }
            }
            if (tmp.length) {
                paramString = `(${tmp.join()})`;
            }
        }
        return paramString;
    }
}

export default new ApiService();