FROM python:2.7.14
# debian 8.9

MAINTAINER aokad <aokad@hgc.jp>

RUN apt-get -y update && \
    apt-get install -y dpkg-dev gcc g++ libc6-dev make patch tar && \
    mkdir -p /tools && \
    \
    cd /tools && \
    echo "build BLAT v.34" && \
    wget http://hgdownload.soe.ucsc.edu/admin/exe/userApps.v349.src.tgz && \
    tar -xzvf userApps.v349.src.tgz && \
    rm -f userApps.v349.src.tgz && \
    cd userApps && \
    make && \
    \ 
    cd /tools && \
    echo "build bwa-0.7.8" && \
    wget http://sourceforge.net/projects/bio-bwa/files/bwa-0.7.8.tar.bz2 && \
    tar xjvf bwa-0.7.8.tar.bz2 && \
    cd bwa-0.7.8 && \
    make && \
    \ 
    cd /tools && \
    echo "build samtools-1.2" && \
    wget -nc https://sourceforge.net/projects/samtools/files/samtools/1.2/samtools-1.2.tar.bz2 && \
    tar xjvf samtools-1.2.tar.bz2 && \
    rm -f samtools-1.2.tar.bz2 && \
    cd samtools-1.2 && \
    make && \
    \ 
    cd /tools && \
    echo "build bedtools-2.24.0" && \
    wget -nc https://github.com/arq5x/bedtools2/archive/v2.24.0.tar.gz && \
    tar xzvf v2.24.0.tar.gz && \
    rm -f v2.24.0.tar.gz && \
    cd bedtools2-2.24.0 && \
    make && \
    \ 
    cd /tools && \
    echo "build libmaus-0.0.196" && \
    wget https://github.com/gt1/libmaus/archive/0.0.196-release-20150326095654.tar.gz && \
    tar xzvf 0.0.196-release-20150326095654.tar.gz && \
    rm -f 0.0.196-release-20150326095654.tar.gz && \
    cd libmaus-0.0.196-release-20150326095654 && \
    autoreconf -i -f && \
    ./configure && \
    make && \
    make install && \
    \ 
    cd /tools && \
    echo "build biobambam-0.0.191" && \
    wget -nc https://github.com/gt1/biobambam/archive/0.0.191-release-20150401083643.tar.gz && \
    tar xzvf 0.0.191-release-20150401083643.tar.gz && \
    rm -f 0.0.191-release-20150401083643.tar.gz && \
    cd biobambam-0.0.191-release-20150401083643 && \
    autoreconf -i -f && \
    ./configure && \
    make && \
    \ 
    cd /tools && \
    echo "build htslib-1.3" && \
    wget -nc https://sourceforge.net/projects/samtools/files/samtools/1.3/htslib-1.3.tar.bz2 && \
    tar xvf htslib-1.3.tar.bz2 && \
    rm -f htslib-1.3.tar.bz2 && \
    cd htslib-1.3 && \
    make && \
    \ 
    cd /tools && \
    echo "build tophat-1.0.14.Linux" && \
    wget -nc http://ccb.jhu.edu/software/tophat/downloads/tophat-1.0.14.Linux_x86_64.tar.gz && \
    tar xzvf tophat-1.0.14.Linux_x86_64.tar.gz && \
    rm -f tophat-1.0.14.Linux_x86_64.tar.gz && \
    \ 
    cd /tools && \
    echo "build STAR-2.5.2a" && \
    wget -nc https://github.com/alexdobin/STAR/archive/2.5.2a.tar.gz && \
    tar xzvf 2.5.2a.tar.gz && \
    rm -f 2.5.2a.tar.gz && \
    cd STAR-2.5.2a && \
    make

# perl package
RUN set -xv && \
    apt-get -y update && \
    echo "deb http://ftp.jp.debian.org/debian/ jessie main contrib non-free" >> /etc/apt/sources.list && \
    apt-get -y update && \
    apt-get install -y build-essential dh-autoreconf dpkg-dev g++ gcc libc6-dev libcurl4-gnutls-dev libgd2-xpm-dev libgnutls28-dev \
                       libjson-perl libncurses-dev libncurses5-dev libp11-kit-dev \
                       libssl-dev libtasn1-6-dev make nettle-dev patch pkg-config \
                       tar zlib1g-dev && \
    mkdir -p /tools && \
    \
    cd /tools && \
    echo "build PCAP-core-dev.20150511" && \
    wget https://github.com/cancerit/cgpBigWig/archive/0.4.4.tar.gz && \
    tar xzvf 0.4.4.tar.gz && \
    rm -f xzvf 0.4.4.tar.gz && \
    cd cgpBigWig-0.4.4 && \
    bash ./setup.sh /tools/ICGC && \
    \
    cd /tools && \
    echo "build PCAP-core-dev.20150511" && \
    wget -nc https://github.com/ICGC-TCGA-PanCancer/PCAP-core/archive/v1.8.2.tar.gz && \
    tar xzvf v1.8.2.tar.gz && \
    rm v1.8.2.tar.gz && \
    cd PCAP-core-1.8.2 && \
    bash setup.sh /tools/ICGC

# Please add the following to beginning of path:
#   /tools/ICGC/bin
# Please add the following to beginning of PERL5LIB:
#   /tools/ICGC/lib/perl5
#   /tools/ICGC/lib/perl5/x86_64-linux-gnu-thread-multi

# python package
RUN apt-get install -y unzip && \
    pip install Cython && \
    pip install drmaa && \
    pip install pysam && \
    mkdir -p /tools && \
    \
    cd /tools && \
    wget https://github.com/bunbun/ruffus/archive/v2.6.3.tar.gz && \
    tar xzvf v2.6.3.tar.gz && \
    rm -f v2.6.3.tar.gz && \
    cd ruffus-2.6.3 && \
    python setup.py install && \
    \
    cd /tools && \
    git clone https://github.com/ravenac95/PyYAML && \
    cd PyYAML && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonPipeline/archive/v2.5.3.zip && \
    unzip v2.5.3.zip && \
    rm -f v2.5.3.zip && \
    cd GenomonPipeline-2.5.3 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonSV/archive/v0.4.2rc.zip && \
    unzip v0.4.2rc.zip && \
    rm -f v0.4.2rc.zip && \
    cd GenomonSV-0.4.2rc && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/sv_utils/archive/v0.4.0beta.zip && \
    unzip v0.4.0beta.zip && \
    rm -f v0.4.0beta.zip && \
    cd sv_utils-0.4.0beta && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonMutationFilter/archive/v0.2.1.zip && \
    unzip v0.2.1.zip && \
    rm -f v0.2.1.zip && \
    cd GenomonMutationFilter-0.2.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/EBFilter/archive/v0.2.1.zip && \
    unzip v0.2.1.zip && \
    rm -f v0.2.1.zip && \
    cd EBFilter-0.2.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonFisher/archive/v0.2.0.zip && \
    unzip v0.2.0.zip && \
    rm -f v0.2.0.zip && \
    cd GenomonFisher-0.2.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonMutationAnnotator/archive/v0.1.0.zip && \
    unzip v0.1.0.zip && \
    rm -f v0.1.0.zip && \
    cd GenomonMutationAnnotator-0.1.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonQC/archive/v2.0.1.zip && \
    unzip v2.0.1.zip && \
    rm -f v2.0.1.zip && \
    cd GenomonQC-2.0.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/aokad/GenomonPostAnalysis/archive/v1.4.1.zip && \
    unzip v1.4.1.zip && \
    rm -f v1.4.1.zip && \
    cd GenomonPostAnalysis-1.4.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/paplot/archive/v0.5.5.zip && \
    unzip v0.5.5.zip && \
    rm -f v0.5.5.zip && \
    cd paplot-0.5.5 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/ken0-1n/mutation_util/archive/v0.5.0.zip && \
    unzip v0.5.0.zip && \
    rm -f v0.5.0.zip && \
    cd mutation_util-0.5.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/ken0-1n/GenomonHotspotCall/archive/v0.1.0.zip && \
    unzip v0.1.0.zip && \
    rm -f v0.1.0.zip && \
    cd GenomonHotspotCall-0.1.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/fusionfusion/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd fusionfusion-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/fusion_utils/archive/v0.2.0.zip && \
    unzip v0.2.0.zip && \
    rm -f v0.2.0.zip && \
    cd fusion_utils-0.2.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/chimera_utils/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd chimera_utils-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/intron_retention_utils/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd intron_retention_utils-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonExpression/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd GenomonExpression-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget https://github.com/Genomon-Project/genomon_Rscripts/archive/v0.1.3.zip && \
    unzip v0.1.3.zip && \
    rm -f v0.1.3.zip

# R package
RUN set -xv && \
    echo "deb http://deb.debian.org/debian testing main" >> /etc/apt/sources.list && \
    apt-get -y update && \
    apt-get install -y r-base libcurl4-openssl-dev libdbd-mysql libmysqlclient-dev libgeos-dev libxml2-dev libssl-dev && \
    echo "options(repos='https://cran.rstudio.com/')" > .Rprofile && \
    Rscript -e "install.packages('devtools')" && \
    Rscript -e "install.packages('ggplot2')" && \
    Rscript -e "install.packages('Rcpp')" && \
    Rscript -e "install.packages('rjson')" && \
    Rscript -e "source('http://bioconductor.org/biocLite.R');biocLite(c('GenomicRanges', 'BSgenome.Hsapiens.UCSC.hg19'), ask=FALSE)" && \
    Rscript -e "library(devtools);devtools::install_github('friend1ws/pmsignature')"

CMD ["/bin/bash"]
