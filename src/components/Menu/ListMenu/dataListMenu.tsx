import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import SummarizeIcon from '@mui/icons-material/Summarize';

const dataListMenu = [
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

export default dataListMenu;
