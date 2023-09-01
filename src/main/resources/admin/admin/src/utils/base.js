const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootj470j/",
            name: "springbootj470j",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootj470j/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "民宿管理平台"
        } 
    }
}
export default base
