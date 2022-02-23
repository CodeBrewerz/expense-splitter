import { rectSortingStrategy } from '@dnd-kit/sortable';

export const Grid = () => (
    <MultipleContainers
        columns={2}
        strategy={rectSortingStrategy}
        wrapperStyle={() => ({
            width: 150,
            height: 150,
        })}
    />
);