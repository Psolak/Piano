import { TestBed } from '@angular/core/testing';
import { PianoComponent } from 'src/app/piano/piano.component';

type CompilerOptions = Partial<{
  providers: any[];
  useJit: boolean;
  preserveWhitespaces: boolean;
}>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      PianoComponent       
    ],
  });
  return TestBed.compileComponents();
});

export type ConfigureFn = (testBed: typeof TestBed) => void;

export const configureTests = (configure: ConfigureFn, compilerOptions: CompilerOptions = {}) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  };

  const configuredTestBed = TestBed.configureCompiler(compilerConfig);

  configure(configuredTestBed);

  return configuredTestBed.compileComponents().then(() => configuredTestBed);
};
