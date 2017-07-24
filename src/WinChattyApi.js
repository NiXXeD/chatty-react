const base = 'https://winchatty.com/v2'

class WinChattyApi {
    async fetch(url, options = {}) {
        if (options.body && typeof options.body !== 'string') options.body = JSON.stringify(options.body)

        let res = await fetch(`${base}/${url}`, options)
        if (res.ok) {
            return res.json()
        } else {
            let body = await res.json()
            let {status, statusText} = res
            console.error('Http Error:', {status, statusText, body})
            throw new Error(`${status} ${statusText}`)
        }
    }

    async getChatty(threadCount) {
        return await this.fetch(`getChatty${threadCount > 0 ? `?count=${threadCount}` : ''}`)
    }

    async waitForEvent(lastEventId) {
        return await this.fetch(`waitForEvent?lastEventId=${lastEventId}`)
    }

    async verifyCredentials(username, password) {
        return await this.fetch(`verifyCredentials`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        })
    }
}

export default WinChattyApi
