import {createMuiTheme} from "@material-ui/core";


//See here - https://material-ui.com/customization/palette/
//https://react-material-kit.devias.io/app/reports/dashboard
export const theme = createMuiTheme({
    "components":{
      "MuiStepIcon": {
        "styleOverrides": {
          "root" : {
            "color":"#ffb74d"
          }
        }
      },
    },

    "overrides": {
      "MuiLinearProgress": {
        "root": {
          "borderRadius": 3,
          "overflow": "hidden"
        }
      },
      "MuiListItemIcon": {
        "root": {
          "minWidth": 32
        }
      },
      "MuiChip": {
        "root": {
          "backgroundColor": "rgba(0,0,0,0.075)"
        }
      }
    },
    "palette": {
      "type": "dark",
      "primary": {
        "main": "#a67dff",
      },
      "secondary": {
        "main": "#4B9E86",
      },
      "warning": {
        "light": "#ffb74d",
        "main": "#ff9800",
        "dark": "#f57c00",
        "contrastText": "rgba(0, 0, 0, 0.87)"
      },
      "info": {
        "light": "#64b5f6",
        "main": "#2196f3",
        "dark": "#1976d2",
        "contrastText": "#fff"
      },
      "success": {
        "light": "#81c784",
        "main": "#4caf50",
        "dark": "#388e3c",
        "contrastText": "rgba(0, 0, 0, 0.87)"
      },
      "text": {
        "primary": "#f6f5f8",
        "secondary": "#9699a4",
      },
      "background": {
        "paper": "#2a2d3d",
        "default": "#222431",
        "dark": "#222431"
      },
      "action": {
        "active": "rgba(255, 255, 255, 0.54)",
        "hover": "rgba(255, 255, 255, 0.04)",
        "hoverOpacity": 0.08,
        "selected": "rgba(255, 255, 255, 0.08)",
        "selectedOpacity": 0.16,
        "disabled": "rgba(255, 255, 255, 0.26)",
        "disabledBackground": "rgba(255, 255, 255, 0.12)",
        "disabledOpacity": 0.38,
        "focus": "rgba(255, 255, 255, 0.12)",
        "focusOpacity": 0.12,
        "activatedOpacity": 0.24
      }
    },
    "props": {},
    "shadows": [
      "none",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)",
      "0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"
    ],
    "typography": {
      "htmlFontSize": 16,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      "fontWeightBold": 700,
      "h1": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "1.59375rem",
        "lineHeight": 1.167,
        "letterSpacing": "-0.24px",
        "@media (min-width:600px)": {
          "fontSize": "1.928rem"
        },
        "@media (min-width:960px)": {
          "fontSize": "2.1422rem"
        },
        "@media (min-width:1280px)": {
          "fontSize": "2.1422rem"
        }
      },
      "h2": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "1.40625rem",
        "lineHeight": 1.2,
        "letterSpacing": "-0.24px",
        "@media (min-width:600px)": {
          "fontSize": "1.6667rem"
        },
        "@media (min-width:960px)": {
          "fontSize": "1.6667rem"
        },
        "@media (min-width:1280px)": {
          "fontSize": "1.875rem"
        }
      },
      "h3": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "1.25rem",
        "lineHeight": 1.167,
        "letterSpacing": "-0.06px",
        "@media (min-width:600px)": {
          "fontSize": "1.2853rem"
        },
        "@media (min-width:960px)": {
          "fontSize": "1.4996rem"
        },
        "@media (min-width:1280px)": {
          "fontSize": "1.4996rem"
        }
      },
      "h4": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "1.125rem",
        "lineHeight": 1.235,
        "letterSpacing": "-0.06px",
        "@media (min-width:600px)": {
          "fontSize": "1.2146rem"
        },
        "@media (min-width:960px)": {
          "fontSize": "1.2146rem"
        },
        "@media (min-width:1280px)": {
          "fontSize": "1.2146rem"
        }
      },
      "h5": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": 16,
        "lineHeight": 1.334,
        "letterSpacing": "-0.05px"
      },
      "h6": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": 14,
        "lineHeight": 1.6,
        "letterSpacing": "-0.05px"
      },
      "subtitle1": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 400,
        "fontSize": "1rem",
        "lineHeight": 1.75,
        "letterSpacing": "0.00938em"
      },
      "subtitle2": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "0.875rem",
        "lineHeight": 1.57,
        "letterSpacing": "0.00714em"
      },
      "body1": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 400,
        "fontSize": "1rem",
        "lineHeight": 1.5,
        "letterSpacing": "0.00938em"
      },
      "body2": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 400,
        "fontSize": "0.875rem",
        "lineHeight": 1.43,
        "letterSpacing": "0.01071em"
      },
      "button": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "0.875rem",
        "lineHeight": 1.75,
        "letterSpacing": "0.02857em",
        "textTransform": "uppercase"
      },
      "caption": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 400,
        "fontSize": "0.75rem",
        "lineHeight": 1.66,
        "letterSpacing": "0.03333em"
      },
      "overline": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontWeight": 500,
        "fontSize": "0.75rem",
        "lineHeight": 2.66,
        "letterSpacing": "0.08333em",
        "textTransform": "uppercase"
      }
    },
    "zIndex": {
      "speedDial": 1050,
    }
  })