class WinChattyApi {
    async getChatty(threadCount) {
        return await this.fetch(`getChatty${threadCount > 0 ? `?count=${threadCount}` : ''}`)
    }

    async waitForEvent(lastEventId) {
        return await this.fetch(`waitForEvent?lastEventId=${lastEventId}`)
    }
}

export default WinChattyApi
