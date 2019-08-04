
import { TaskSearchComponent } from './task-search.component';

describe('TaskSearchComponent', () => {
  let taskSearchComponent: TaskSearchComponent;
  let mockHelperUtlis;

  beforeEach(() => {
    mockHelperUtlis = jasmine.createSpyObj('mockHelperUtlis',['debounce']);
    taskSearchComponent = new TaskSearchComponent(mockHelperUtlis);
  });

  it('should call deboune function with debounce time and callback function when search component is intalized', () => {
    taskSearchComponent.debounceTime = 400;
    taskSearchComponent.ngOnInit();
    expect(mockHelperUtlis.debounce).toHaveBeenCalledWith(taskSearchComponent.search, 400 , false);
  });

  it('should emit search value when search function called', () => {
   spyOn( taskSearchComponent.searchValue,'emit' );
    taskSearchComponent.search({target:{value:'test'}});
    expect(taskSearchComponent.searchValue.emit).toHaveBeenCalledWith('test');
  });

});
