import { OptionsObject, useSnackbar } from 'notistack';

type SnackbarOptions = OptionsObject | undefined;

export const ERR_TOP_CENTER: SnackbarOptions = {
    variant: 'error',
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    autoHideDuration: 2000,
};

export const WARNING_TOP_CENTER: SnackbarOptions = {
    variant: 'warning',
    autoHideDuration: 2000,
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
};

export const INFO_TOP_CENTER: SnackbarOptions = {
    variant: 'info',
    autoHideDuration: 2000,
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
};

export const SUCCESS_TOP_CENTER: SnackbarOptions = {
    variant: 'success',
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    autoHideDuration: 2000,
};

export const SUCCESS_BOTTOM_CENTER: SnackbarOptions = {
    variant: 'success',
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    autoHideDuration: 2000,
};

export const SUCCESS_BOTTOM_RIGHT: SnackbarOptions = {
    variant: 'success',
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    autoHideDuration: 2000,
};

export default function useNotifier() {
    const { enqueueSnackbar } = useSnackbar();

    const notifyError = (msg: string, option?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...ERR_TOP_CENTER, ...option });
    };

    const notifySuccess = (msg: string, option?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...SUCCESS_TOP_CENTER, ...option });
    };

    const notifyInfo = (msg: string, option?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...INFO_TOP_CENTER, ...option });
    };

    const notifyWarn = (msg: string, option?: SnackbarOptions) => {
        enqueueSnackbar(msg, { ...WARNING_TOP_CENTER, ...option });
    };

    return {
        notifyError,
        notifyInfo,
        notifySuccess,
        notifyWarn,
    };
}
