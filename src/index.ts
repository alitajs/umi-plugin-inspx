import { IApi } from '@umijs/types';
import { join } from 'path';
import { readFileSync } from 'fs';
import { Mustache, lodash, winPath } from '@umijs/utils';

export default (api: IApi) => {

  // 配置
  api.describe({
    key: 'inspx',
    config: {
      schema(joi) {
        return joi.object({
          disabled: joi.boolean(),
          margin: joi.boolean(),
          size: joi.boolean(),
          padding: joi.boolean(),
        });
      },
    },
  });

  // 生成临时文件
  api.onGenerateFiles({
    fn() {

      // inspx.ts
      const inspxTpl = readFileSync(join(__dirname, 'inspx.tpl'), 'utf-8');
      api.writeTmpFile({
        path: 'plugin-inspx/inspx.tsx',
        content: Mustache.render(inspxTpl, {
          inspx: {
            ...{
              disabled: false,
              margin: true,
              size: true,
              padding: true,
            }, ...(api.userConfig.inspx || {})
          }
        })
      });

      // runtime.tsx
      const runtimeTpl = readFileSync(join(__dirname, 'runtime.tpl'), 'utf-8');
      api.writeTmpFile({
        path: 'plugin-inspx/runtime.tsx',
        content: runtimeTpl,
      });
    }
  });
  api.addRuntimePlugin(() =>
    [join(api.paths.absTmpPath!, 'plugin-inspx/runtime.tsx')]
  );

};
