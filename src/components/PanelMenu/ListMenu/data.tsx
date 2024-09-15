import SettingsIcon from '@mui/icons-material/Settings';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import StorageIcon from '@mui/icons-material/Storage';

const dataList = [
  {
    main: {
      name: 'Настройки',
      icon: <SettingsIcon />,
    },
    nested: [
      {
        name: 'Общие',
      },
      {
        name: 'Профиль',
      },
    ],
  },

  {
    main: {
      name: 'Внесение данных',
      icon: <NoteAltIcon />,
    },
    nested: [
      {
        name: 'В общий реестр',
      },
      {
        name: 'В плановый реестр',
      },
    ],
  },

  {
    main: {
      name: 'Отчеты',
      icon: <SummarizeIcon />,
    },

    nested: [
      {
        name: 'Годовой',
      },
      {
        name: 'Квартальный',
      },
    ],
  },

  {
    main: {
      name: 'База знаний',
      icon: <StorageIcon />,
    },

    nested: [
      {
        name: 'Инвестиции',
      },
      {
        name: 'Налоговый вычет',
      },
    ],
  },
];

export default dataList;
