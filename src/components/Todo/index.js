import { Row, Tag, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
// import { setCompleteToDoAction } from '../../redux/actions';
import toDoSlice from '../TodoList/ToDoSlice';
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, completed }) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  useEffect(()=>{
    dispatch(toDoSlice.actions.setCompleteToDo({
      name,
      completed: checked
    }))
  }, [checked])

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
