class channelChart{
    constructor(svgID){
        this.svg = document.querySelector(`#${svgID}`);
        this.data = null;
    }
    loadData(data){
        this.data = data;
    }
    test(){
        console.log('svg:', ths.svg);
        console.log('data:', this.data);
    }
}