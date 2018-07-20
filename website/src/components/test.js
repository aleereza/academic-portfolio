import React from "react"


class Tabs extends React.Component {
    constructor(json){
      super(json)
      this.state = {
        index: null,
        activeBarWidth: 0,
        left:0,
      }
    }

  tabClick = function(el, index){

    let elm = $(el);

    var parentFromWindow = elm.parent().scrollLeft() +  elm.parent().offset().left;
    var elmFromWindow = elm.scrollLeft() + elm.offset().left;

    var left = elmFromWindow - parentFromWindow;

    this.setState({
      activeIndex: index,
      activeBarWidth: elm.width(),
      left
    });
  }


    render(){
        let {
            children=[],
            ...rest
        } = this.props;

        return (
            <div className='nav-bar' {...rest}>
                <div className='nav-container'>
                    {children.map((child, index) =>
                        // Add the index and key props to each tab
                        (child) && React.cloneElement(child,
                          {
                            index: index,
                            key: index,
                            onClickFunc: this.tabClick.bind(this),
                            className: this.state.activeIndex === index ? 'active': '',
                          })
                    )}
                    <div className="active-bar" style={{width:this.state.activeBarWidth, left:this.state.left}}/>
                </div>
            </div>
        )
    }
}

class TabLink extends React.Component {
    componentDidMount(){
      if(this.props.index==0){
        this.props.onClickFunc(this.el, 0);
      }
    }
    render() {
        const {
            name,       // Name to display
            namedRoute, // the route to go to
            icon,       // an icon to display
            back,
            index,
            onClickFunc,
            className='',
        } = this.props;

        const combinedClassName = "link " + className;

        return (
            <div
                id={index} // Required so the correct CSS can be applied from centriamTabs.scss
                className={combinedClassName}
                ref={(el)=>{this.el = el;}}
                onClick={() =>{onClickFunc(this.el, index)}}
            >
                {icon}
                <span>{name}</span>
            </div>
        );
    }
}

links = [];
let icon = <div className="icon"/>;

  links.push(
    <TabLink icon={icon} name={'first link'}/>
  )
links.push(
    <TabLink icon={icon} name={'second link'} />
  )
links.push(
    <TabLink icon={icon} name={'Extremely Long link'} />
  )

links.push(
    <TabLink icon={icon} name={'sl'}/>
  )

links.push(
    <TabLink icon={icon} name={'I needed an even LONGER link for testing'} />
  )

ReactDOM.render(
  <Tabs>
    {links}
  </Tabs>,
  document.getElementById('app')
)
