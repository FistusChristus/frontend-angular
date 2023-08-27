import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Учеба'},
    {id: 3, title: 'Дом'},
    {id: 4, title: 'Спорт'},
    {id: 5, title: 'Развлечения'},
    {id: 6, title: 'Семья'},
    {id: 7, title: 'Отдых'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: 'green'},
    {id: 2, title: 'Средний', color: 'orange'},
    {id: 3, title: 'Высокий', color: 'red'},
    {id: 4, title: 'Очень высокий', color: 'purple'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Помыть посуду',
      completed: false,
      priority: TestData.priorities[0],
      category: TestData.categories[0],
      date: new Date()
    },

    {
      id: 2,
      title: 'Убрать комнату',
      completed: false,
      priority: TestData.priorities[2],
      category: TestData.categories[3],
      date: new Date()
    },

    {
      id: 3,
      title: 'Сдать экзамен',
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[2],
      date: new Date()
    },

    {
      id: 4,
      title: 'Списать счета',
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[4],
      date: new Date()
    },

    {
      id: 5,
      title: 'Выжить',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[5],
      date: new Date()
    }
  ]

}
