function pageViewModule(){
    let data1 = [{"name": "Manuscript"},
                {"name": "|"},
                {'name': "Learn More"},]
    let count_click = 0;
    var ease = d3.easeCubic;

    function pageView(){};
    pageView.onClickHyper1= function(){
        d3.select('#hyper-1').on('click',
                function(){
                    if(count_click%2 == 0){
                        let drop_down_container = d3.select('#hyper-1')
                            .append('div').attr('class','dropdown-container')
                            .attr('id','dropdown-container1')

                            drop_down_container
                            .selectAll('div')
                            .data(data1).enter()
                            .append('div')
                            .attr('class', 'drop-down1')
                            .text(function(d){ return d.name;})
                            .style('opacity',0)
                            .transition()
                            .duration(400)
                            .style('opacity', 1)

                        count_click++;
                    }else{
                        d3.selectAll('.dropdown-container')
                        .attr('class','remove-dropdown')
                        .remove();
                        count_click=0;
                    }

                })
    }
    pageView.onClickHyper2=function(){
        var acc = document.getElementsByClassName("accordion")
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
              this.classList.toggle("activeaccordion");
              var panel = this.nextElementSibling;
              if (panel.style.maxHeight){
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
              }
            });
          }
    }

    return pageView;
}
// console.log("load page view");
