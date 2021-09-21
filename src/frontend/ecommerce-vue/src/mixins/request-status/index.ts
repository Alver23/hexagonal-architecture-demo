// Commons
import { STATUS_TYPES } from '@/commons/app';

export default {
  data: (): { status: STATUS_TYPES, error: Error | undefined } => ({
    status: STATUS_TYPES.IDLE,
    error: undefined,
  }),
  methods: {
    setAsError(error: Error): void {
      // @ts-ignore
      this.status = STATUS_TYPES.FAILED;
      // @ts-ignore
      this.error = error;
    },
    setAsFulfilled(): void {
      // @ts-ignore
      this.status = STATUS_TYPES.SUCCEEDED;
    },
    setAsPending(): void {
      // @ts-ignore
      this.status = STATUS_TYPES.LOADING;
    },
  },
};
