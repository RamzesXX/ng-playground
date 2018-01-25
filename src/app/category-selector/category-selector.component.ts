import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TreeComponent, TreeNode} from 'angular-tree-component';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {

  @Input()
  isMultipleSelectAllowed: boolean;

  @ViewChild(TreeComponent)
  tree: TreeComponent;

  filter: string;


  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'}
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub'}
          ]
        }
      ]
    }
  ];
  options = {
    useCheckbox: true
  };


  constructor() {
  }

  ngOnInit() {
  }

  filterTree(newValue) {
    this.filter = newValue;

    this.tree.treeModel.filterNodes((node) => this.filterPredicate(node, newValue));
  }


  filterPredicate(node, filter) {
    return !filter || (node.data.name && node.data.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

  onExpand = () => this.tree.treeModel.expandAll();

  onCollapse = () => this.tree.treeModel.collapseAll();


  onOk() {

  }

  onCancel() {

  }

  onResetSelection() {
    const nodes: TreeNode[] = this.tree.nodes;
console.log(nodes);
    nodes.forEach((node) => node.setIsSelected(false));
  }
}
