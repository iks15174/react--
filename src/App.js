import logo from './logo.svg';
import './App.css';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import React, {Component} from "react"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'welcome',
      selected : null,
      welcome : {title : "Welcome", desc : "Hello, React!!"},
      subject : {title : 'WEB', sub : 'world wide web!'},
      contents :[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"},
      ]
    }
  }
  onclick(id){
    this.setState({
      mode : "read",
      selected : id,
    });
  }
  render(){
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[this.state.selected-1].title;
      _desc = this.state.contents[this.state.selected-1].desc;
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents} onclick={(id)=>this.onclick(id)}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
